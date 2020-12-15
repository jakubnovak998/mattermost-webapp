// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {makeGetFilesForPost} from 'mattermost-redux/selectors/entities/files';

import {GlobalState} from 'types/store';

import CommentedOnFilesMessage from './commented_on_files_message';

function makeMapStateToProps() {
    const selectFileInfosForPost = makeGetFilesForPost();

    return function mapStateToProps(state: GlobalState, ownProps: any) {
        let fileInfos;
        if (ownProps.parentPostId) {
            fileInfos = selectFileInfosForPost(state, ownProps.parentPostId);
        }

        return {
            fileInfos,
        };
    };
}

export default connect(makeMapStateToProps)(CommentedOnFilesMessage);