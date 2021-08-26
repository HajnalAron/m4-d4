import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap" 

class CommentList extends Component {
    state = {
        comments:[],
    }
    componentDidMount = async () => {
        try {
        let resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,{
                method:"GET",
                headers:{
                    "Authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjY5MTJkNTI2MjAwMTViNmRjOTciLCJpYXQiOjE2Mjk5ODMwMjMsImV4cCI6MTYzMTE5MjYyM30.kZueZZ8UW_1TIU6mPpYYQkcIQ8RyOTIBddtspnqXlsQ"
                }
            })
            if (resp.ok) {
                let comments = await resp.json()
                console.log(comments)
                this.setState({
                    comments:comments
                })
            } 
        }
        catch(error) {
            console.log(error)
        } 
    }
    render () {
        console.log("render")
        return(
        <ListGroup>
        {this.state.comments.map(comment => {return(<ListGroup.Item>{comment.comment}</ListGroup.Item>)})}    
        </ListGroup>
        )
    }
}

export default CommentList