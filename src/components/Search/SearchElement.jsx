import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearchArray } from "../../features/cats/catSlice";
import { Link } from "react-router-dom";

function SearchElement() {
  const wrapperRef = useRef(null);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisible(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);
  useEffect(() => {
    if (input === "") {
      setVisible(false);
    }
  }, [input]);

  useEffect(() => {
    if (results.length == 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [results]);

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    setVisible(true);
  };

  //similar results of search
  const cats = [];
  const fetchData = (value) => {
    fetch("https://api.thecatapi.com/v1/breeds/?limit=67", {
      headers: {
        "x-api-key":
          "live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((cat) => {
          return (
            value && cat && cat.name && cat.name.toLowerCase().includes(value)
          );
        });

        results.map((element) => {
          if (element.hasOwnProperty("image")) {
            cats.push(element);
          }
        });
        setResults(cats);
      });
  };

  const dispatch = useDispatch();

  // create array of chosen breed
  const chooseBreed = (id, name) => {
    setInput(name);
    setVisible(false);
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=67&breed_ids=${id}`,
      {
        headers: {
          "x-api-key":
            "live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE",
        },
      }
    ).then((response) =>
      response.json().then((data) => ({
        data: dispatch(setSearchArray(data)),
        status: response.status,
      }))
    );
  };

  return (
    <div className="searchbar" ref={wrapperRef}>
      <input
        className="search__input"
        placeholder="Search for breeds by name"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="search__btn"></button>
      <div className={visible ? "search__results" : "search__results-hidden"}>
        {results.map((cat) => (
          <Link
            to="/search"
            className="search__result"
            key={cat.id}
            onClick={() => chooseBreed(cat.id, cat.name)}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchElement;
