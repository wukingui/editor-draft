import React from 'react';
import Editor from './editor';

export default class APP extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      contentHTML: ''
    }
  }

  handleContentChange(contentStateJSON, contentHTML) {

    this.setState({ contentHTML })
  }

  render() {
      return (
        <div>
          <Editor
            syncContent={this.handleContentChange.bind(this)}
            expandControl={true}
            fixedEditorControls={true}
          />
          <div className="view" dangerouslySetInnerHTML={{__html:this.state.contentHTML}}></div>
        </div>
    )
  }
}