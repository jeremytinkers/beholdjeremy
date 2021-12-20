import {useState, useEffect} from "react";
export default function ApiTest() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.github.com/users/jeremytinkers/repos")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log("loaded :" + isLoaded);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
            <div>
          <div>
          Basic thre:-
            {item.name}
            {item.description}
            {item.html_url}
          </div>
          <div>
            Topics:-
            {
                item.topics.map((curTopic)=>{
                    return <p>{curTopic}</p>;
                })
            }
        </div>
        </div>
        ))}
      </ul>
    );
  }
}

