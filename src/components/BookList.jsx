import React from "react";
import SingleBook from "./SingleBook";
import { Col, Row } from "react-bootstrap";
import category from "../data/fantasy.json";
class BookList extends React.Component {
	state = {
		selected: false,
	};
	render() {
		return (
			<Row key={category[0].category}>
				<Col xs="12">
					<h1>{category[0].category}</h1>
				</Col>
				{category.map((book) => (
					<SingleBook
						setSelected={(asin) => {
							this.setState({ selected: asin });
							console.log({ book });
						}}
						selected={this.state.selected}
						book={book}
					/>
				))}
			</Row>
		);
	}
}

export default BookList;
