import React, { useEffect, useState } from 'react';
import axios from "axios"
import {Drawer } from 'antd';
const initialData = {
    name: "",
    mobile: ""
};

const Crud = () => {
    const [data, setData] = useState(initialData);
    const [updated, setUpdated] = useState(initialData)
    const [details, setDetails] = useState([]);
    const [updateId, setUpdateId] = useState(null);////create for cond.renering
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
        setData(initialData); // Reset form data when closing the drawer
        setUpdateId(null); // Reset updateId when closing the drawer
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setUpdated((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    //Patch Request Function(PATCH Request)
    const updateData = async (id) => {
        try {
            const response = await axios.patch(
                `http://localhost:8080/data/${id}`,
                updated
            );
            console.log(response.data);
            getData();


        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost:8080/data/${id}`,
                data
            );
            console.log(response.data);
            alert("deleted")
            getData();


        } catch (error) {
            console.log(error);
        }
    };

    // <----------For getting value inside input box when click on edit button-----
    const handleUpdate = (id) => {
        const selectedItem = details.find((item) => item.id === id);
        if (selectedItem) {
            setUpdated(selectedItem);
            setUpdateId(id);
            showDrawer();
        }
        // setUpdated(initialData);

    };
    // <-----------postData---------->
    const postData = async () => {
        try {
            let res = await axios.post("http://localhost:8080/data", data)
            setData(res.data)
            getData()
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
        setData(initialData)
    }

    // <-----------handelsubmit for post and update---------->
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (updateId) {
            updateData(updateId)
            alert("updated")
            setUpdated(initialData);

            setUpdateId(null);
            onClose()

        } else {
            postData()
            alert("added")
        }

    };

    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:8080/data")
            setDetails(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <form onSubmit={handleSubmit}>
                    Name: <input type="text" value={updated.name} placeholder="enterName" onChange={handleChange} name="name" /> <br /><br />
                    Mobile: <input type="text" value={updated.mobile} name="mobile" onChange={handleChange} placeholder="enterMobile" /> <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </Drawer>
            <form action="">
                Name: <input type="text" value={data.name} placeholder="enterName" onChange={handleChange} name="name" /> <br /><br />
                Mobile: <input type="text" value={data.mobile} name="mobile" onChange={handleChange} placeholder="enterMobile" /> <br /><br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <hr />
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
                {details.map((ele) => {
                    return <div>
                        <h1>{ele.name}</h1>
                        <h3>{ele.mobile}</h3>
                        <button onClick={() =>
                            handleUpdate(ele.id)
                        }>Edit</button>
                        <button onClick={() =>
                            handleDelete(ele.id)
                        }>Delete</button>
                    </div>
                })}
            </div>

        </div>
    );
};

export default Crud;
