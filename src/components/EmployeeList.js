import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const EmployeeList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [employees, setemployees] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try{
                const response = await EmployeeService.getEmployee();
                setemployees(response.data)
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

  return (
    <div className="container mx-auto my-8">
        <div className="h-12">
            <button 
                onClick={() => navigate("/addEmployee")}
                className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                Add Employee
            </button>
        </div>
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 ">FIRST NAME</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 ">LAST NAME</th>
                        <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6 ">EMAIL</th>
                        <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6 ">ACTIONS</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody>
                    {employees.map((employee) =>(
                    <tr key={employee.id}>
                        <td className="text-left px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                                {employee.firstName}
                            </div>
                        </td>
                        <td className="text-left px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                                {employee.lastName}
                            </div>
                        </td>
                        <td className="text-left px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                                {employee.email}
                            </div>
                        </td>
                        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800">Delete</a>
                        </td>
                    </tr>
                    ) )}
                </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default EmployeeList