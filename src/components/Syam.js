import React, { useState } from 'react'
import "../App.css"
export const Syam = () => {

  const tab=["SAVED","DRAFTED","DELETED"]
  const [tabState,setTabstate]=useState("SAVED")
  const [status,setstatus]=useState("saved")
  console.log(status,"sai")


  const some=[
    {
      "id": 1,
      "name": "John Doe",
      "status": "drafted"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "status": "saved"
    },
    {
      "id": 3,
      "name": "Alex Johnson",
      "status": "drafted"
    },
    {
      "id": 4,
      "name": "Emily Brown",
      "status": "deleted"
    },
    {
      "id": 5,
      "name": "Michael Wilson",
      "status": "saved"
    },
    {
      "id": 6,
      "name": "Emma Martinez",
      "status": "drafted"
    },
    {
      "id": 7,
      "name": "William Taylor",
      "status": "saved"
    },
    {
      "id": 8,
      "name": "Sophia Anderson",
      "status": "deleted"
    },
    {
      "id": 9,
      "name": "James Thomas",
      "status": "saved"
    },
    {
      "id": 10,
      "name": "Olivia Garcia",
      "status": "deleted"
    },
    {
      "id": 11,
      "name": "John Doe",
      "status": "saved"
    },
    {
      "id": 12,
      "name": "Jane Smith",
      "status": "deleted"
    },
    {
      "id": 13,
      "name": "Alex Johnson",
      "status": "saved"
    },
    {
      "id": 14,
      "name": "Emily Brown",
      "status": "drafted"
    },
    {
      "id": 15,
      "name": "Michael Wilson",
      "status": "deleted"
    },
    {
      "id": 16,
      "name": "Emma Martinez",
      "status": "saved"
    },
    {
      "id": 17,
      "name": "William Taylor",
      "status": "drafted"
    },
    {
      "id": 18,
      "name": "Sophia Anderson",
      "status": "saved"
    },
    {
      "id": 19,
      "name": "James Thomas",
      "status": "deleted"
    },
    {
      "id": 20,
      "name": "Olivia Garcia",
      "status": "saved"
    }
  ]


  const filterdata=some.filter((e)=>{
    return e.status==status
  })
  
  

  
  const clickedDATA=(tabState)=>{
    console.log(tabState,"ravi")
    switch(tabState)
    {
        case "SAVED":
          setstatus("saved")
          break;
        case "DRAFTED":
          setstatus("drafted")
          break;
        case "DELETED":
          setstatus("deleted")
          break;
        default:
           setstatus()
           break;

    }
  }
  return (
    <div>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
     {tab.map((e)=>{
        return (
          <div style={{border:"0px solid black",padding:"10px",backgroundColor:"#04AA6D"}}>
            <button onClick={()=>{clickedDATA(e)
              console.log(e,"dddd")
            }}>{e}</button>
          </div>
        )
      })}
      
     </div>
     
<table id="customers">
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>STATUS</th>
  </tr>
  {filterdata.map((e)=>{
      return(
        <tr>
    <td>{e.id}</td>
    <td>{e.name}</td>
    <td>{e.status}</td>
  </tr>
      )
     })}


  
  
</table>
    </div>
  )
}
