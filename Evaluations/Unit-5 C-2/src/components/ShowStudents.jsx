import { useState, useEffect } from "react";
export const ShowStudents = () => {
  const [students, setStudents] = useState([]);
  const [sortBy, setSortBy] = useState("first_name");
  const [order, setOrder] = useState("Ascending");

  useEffect(() => {
    getdata();

    return function cleanup() {};
  }, []);

  async function getdata() {
    const data = await fetch(`http://localhost:8080/students`).then((d) =>
      d.json()
    );
    setStudents(data);
    // console.log(data);
  }

  // function handelchagne2(e) {
  //   setSortBy(e.target.value);
  // }
  // function handelchagne3(e) {
  //   setOrder(e.target.value);
  // }
  // const handelchagne1 = (e) => {
  //   let a = e.target.value;
  //   if (a == "Ascending") {
  //     var s = students.sort((a, b) => {
  //       return a[sortBy] - b[sortBy];
  //     });
  //   } else {
  //     var s = students.sort((a, b) => {
  //        return a[sortBy] - b[sortBy];
  //     });
  //   }
  //   console.log(students);
  //   setStudents(s)
  //   // setfilter(newarray);
  // };

  return (
    <div>
      {console.log(students)}
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            // onChange={handelchagne3(e)}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            // onChange={handelchagne2(e)}
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort"
          // onClick={handelchagne1(e)}
        >
          sort
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {students.map((elem) => (
            <tr className="row" key={elem.id}>
              <td className="first_name">{elem.first_name}</td>
              <td className="last_name">{elem.last_name}</td>
              <td className="email">{elem.email}</td>
              <td className="gender">{elem.gender}</td>
              <td className="age">{elem.age}</td>
              <td className="tenth_score">{elem.tenth_score}</td>
              <td className="twelth_score">{elem.twelth_score}</td>
              <td className="preferred_branch">{elem.preferred_branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
