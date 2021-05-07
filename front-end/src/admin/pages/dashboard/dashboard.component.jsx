import React, {useState} from 'react'

import Navbar from '../../components/navbar/navbar.component';
import StatsBox from '../../components/stats-box/stats-box.component';

import "./dashboard.style.scss";

const Dashboard = () => {
    const [stats, setStats] = useState([
        {
            title: "sales",
            amount: 44,
            percentage: 22
        },
        {
            title: "sales",
            amount: 44,
            percentage: 22
        },
        {
            title: "sales",
            amount: 44,
            percentage: 22
        },
        {
            title: "sales",
            amount: 44,
            percentage: 22
        },
        {
            title: "sales",
            amount: 44,
            percentage: 22
        },
        {
            title: "sales",
            amount: 44,
            percentage: 22
        },
    ])

    return (
        <section className="dashboard-page">
            <div className="welcome">
                <span>welcome back John!</span>
            </div> 
            <div className="row">
                {
                    stats.map(({amount, title, percentage}) => (
                        <div className="col-md-4">
                            <StatsBox amount={amount} title={title} percentage={percentage}/>
                        </div>
                    ))
                }
            </div>
            <div className="stats-table">
                <h2>Active Users</h2>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>name</th>
                                <th>status</th>
                                <th>country</th>
                                <th>purchases</th>
                                <th>details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
        </section>
    )
}

export default Dashboard
