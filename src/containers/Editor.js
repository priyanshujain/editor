import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class Editor extends Component {
  constructor(props) {
    super(props)
    const storedData = JSON.parse(localStorage.getItem('data'))
    this.state = {
      value: `${storedData ? storedData : ''}`,
      theme: 'snow',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ value })
    localStorage.setItem('data', JSON.stringify(value))
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <div className="input-field">
                  <ReactQuill
                    theme={this.state.theme}
                    onChange={(value) => this.handleChange(value)}
                    value={this.state.value}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    bounds={'.app'}
                    placeholder={this.props.placeholder}
                  />
                </div>
      </div>
    )
  }
}

Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

/*
 * PropType validation
 */
Editor.propTypes = {
  placeholder: React.PropTypes.string,
}
