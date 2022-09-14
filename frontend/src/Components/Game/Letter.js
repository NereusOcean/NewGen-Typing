
const styles = {
  wrong: "wred",
  passed: "wpassed-green",
  current: "wgreen",
  waiting: "wblack",
};


class Letter {

  constructor(style, letter) {
    this.style = style;
    this.letter = letter;
  }

  wrong = () =>{
    this.style = styles.wrong;
  }

  passed = () => {
    this.style = styles.passed;
  }

  current = () => {
    this.style = styles.current;
  }

  getCurrentMarkup = () =>{
    return (
      <span className={`${this.style}`}>
        {this.letter}
      </span>
    );
  }
}


export default Letter