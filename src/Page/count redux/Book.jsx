import { connect } from "react-redux";
import { bookAuthor, bookTitle } from "../../redux Services/action/Book_action";

const Book = ({ myauthor, mytitle, bookAuthor, bookTitle }) => {
    return (
        <div>
            <h3>Book Details</h3>
            <h5>{mytitle}</h5>
            <button onClick={bookTitle}>Title Update</button>

            <br />
            <h5>{myauthor}</h5>
            <button onClick={bookAuthor}>Author Update</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        mytitle: state.mytitle,
        myauthor: state.myauthor
    }
}
const mapDispatchToProps = {
    bookAuthor,
    bookTitle
}


export default connect(mapStateToProps, mapDispatchToProps)(Book);