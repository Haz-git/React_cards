import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail author={faker.internet.userName()} date={faker.random.number()} words={faker.random.words()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.internet.userName()} date={faker.random.number()} words={faker.random.words()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.internet.userName()} date={faker.random.number()} words={faker.random.words()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.internet.userName()} date={faker.random.number()} words={faker.random.words()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.internet.userName()} date={faker.random.number()} words={faker.random.words()} />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));