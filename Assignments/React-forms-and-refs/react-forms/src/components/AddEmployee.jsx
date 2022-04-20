import { useState } from "react"

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        maritalStatus: ""
        
    })

    function handleSubmit(e) {
      // e.preventDefault()
        console.log(employee)
        fetch("http://localhost:8080/employee", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(employee),
        });
    }
    
  function handleChange(e) {
        const { name, value } = e.target
        console.log(e);
        console.log(e.target.name, e.target.value);
        setEmployee({ ...employee, [name]: value })
    }
    
    return (
      <>
        <form onSubmit={handleSubmit} className="addemployee">
          <table>
            <tbody>
              <tr>
                <th>Name : </th>
                <td>
                  <input
                    onChange={handleChange}
                    type="text  "
                    name="name"
                    className="name"
                    placeholder="enter name"
                  />
                </td>
              </tr>
              <tr>
                <th>Age : </th>
                <td>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="age"
                    className="age"
                    placeholder="enter age"
                  />
                </td>
              </tr>
              <tr>
                <th>Select Department :  </th>
                <td>
                  <select
                    onChange={handleChange}
                    value={""} 
                    name="department"
                    className="department"
                  >
                    {/* <option value="Select Department">Select Department</option> */}
                    <option value="Computer Science">Computer Science</option>
                    <option value="Informstion Technology">Information Technology</option>
                    <option value="Civil">Civil</option>
                    <option value="Electrical">Electrical</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th> Address : </th>
                <td>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="address"
                    className="address"
                    placeholder="enter address"
                  />
                </td>
              </tr>
              <tr>
                <th> Salary : </th>
                <td>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="salary"
                    className="salary"
                    placeholder="enter salary"
                  />
                </td>
              </tr>
              <tr>
                <th> Marital Status : </th>
                <td>
                  Married 
                  <input
                    onClick={handleChange}
                    name="maritalStatus"
                    className="Married"
                    type="checkbox"
                    value={"Married"}
                  />
                  Unmarried 
                  <input
                    onChange={handleChange}
                    name="maritalStatus"
                    className="Unmarried"
                    type="checkbox"
                    value={"Unmarried"}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </>
    );
    
}

export default AddEmployee