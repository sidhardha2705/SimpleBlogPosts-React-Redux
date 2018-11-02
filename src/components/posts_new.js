import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createPost} from '../actions/index'

class NewPost extends React.Component{

    renderForm(field){
        const {meta:{touched,error}} = field
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className='form-control' 
                    type='text'
                    {...field.input}
                />
                {touched ? error : ''}
            </div>
        )
    }

    onSubmit(values){
       this.props.createPost(values,
        ()=>this.props.history.push('/')
        )
    }

    render(){
        const {handleSubmit} = this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label='Title' 
                    name='title'
                    component={this.renderForm}
                    />
                <Field
                    label='Categories'
                    name='categories'
                    component={this.renderForm}
                    />
                <Field
                    label='Content of the Post'
                    name='content'
                    component={this.renderForm}
                    />
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link to='/' className='btn btn-danger'>Cancel</Link>
            </form>
        )
    }
}

function validate(values){
    const errors={}
    if(!values.title){
        errors.title="Please enter a Title"
    }
    if(!values.categories){
        errors.categories="Categories can't be empty"
    }
    if(!values.content){
        errors.content="Please enter some content"
    }
    return errors
}

export default reduxForm({form:'NewPostForm',
validate:validate})
(
    connect(null,{createPost}) (NewPost)
    )