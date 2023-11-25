import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { userAtom } from '../atom/user';
import { makeRequest } from '../utils/api';
import OrgSidebar from '../components/OrgSidebar';

const OrgDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userAtom);


    // To fetch org details for the dashboard
    useEffect(() => {
        const token = localStorage.getItem("token");

        const fetchUser = async () => {
            const resp = await makeRequest("/org", "GET");
            const user = resp.data.org;
            if (!user) {
                localStorage.removeItem('token');
                navigate("/auth");
            } else {
                setUser(user);
            }
        }

        if (!token) {
            navigate("/auth");
        } else fetchUser();
    }, [])

    return (
        <div className="flex flex-row">
            <OrgSidebar />
            {/* Mid Dashboard Section */}
            <div className="flex flex-col justify-center items-center text-center w-[70vw] h-screen gap-4">
                <span className="text-md">User Analytics on its way. Check how many tasks a certain worker has completed. Calculate Efficiency score per worker, and much more!</span>
                <span className="text-xl">Coming Soon!</span>
            </div>
        </div>
    )
}

export default OrgDashboard;