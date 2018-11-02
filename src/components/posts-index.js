import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router-dom'

class PostsIndex extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
    }

    renderPosts(){
        return(
            _.map(this.props.posts, post=>{
                return(
                    <li key={post.id} className='list-group-item'>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                )
            })
        )
    }

    render(){
        return(
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/posts/new'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {posts:state.posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex)