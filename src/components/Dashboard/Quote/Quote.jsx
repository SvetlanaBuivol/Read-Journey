import { Wrapper } from "./Quote.styled";

const Quote = () => {
    return (
        <Wrapper>
              <img width={40} height={40} src="./images/books.png" alt="books" />
              <p>"Books are <span>windows</span> to the world, and reading is a journey into the unknown."</p>
      </Wrapper>
    )
}

export default Quote;