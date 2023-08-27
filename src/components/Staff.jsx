import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Team } from "./Team";



export const Staff = () => {
  const [propsdata, setPropsdata] = useState([]);
  const employees = []
  const e = {
    name: "",
    job: "",
    img: ""
  }


  useEffect(() => {
    (async () => {
      await axios.get('http://localhost:1337/api/employees?populate=*', {
        headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
      })
        .then(response => {
          const emps = response.data.data
          emps.forEach((emp) => {
            console.log(emp)
            e.name = `${emp.attributes.Last_Name} ${emp.attributes.Name}`
            e.job = emp.attributes.Position
            e.img = emp.attributes.Photo.data[0].attributes.formats.small.url
            employees.push(e)
          });
          setPropsdata(employees)
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    })();

  }, []);


  return <div id="team" className="text-center">
    <div className="container">
      <div className="col-md-8 col-md-offset-2 section-title">
        <h2>Meet the Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p>
      </div>
      <div id="row">
        {propsdata
          ? propsdata.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
              <div className="thumbnail">
                {" "}
                <img src={d.img} alt="..." className="team-img" />
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            </div>
          ))
          : "loading"}
      </div>
    </div>
  </div>
}