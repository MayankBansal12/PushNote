import React, { useEffect, useState } from 'react'
import { makeRequest } from '../utils/api'
import { useRecoilState } from 'recoil'
import { userAtom } from '../atom/user'
import { projectType, taskType } from '../types/types'
import DashTask from './DashTask'

interface UserProjectProps {
    project: projectType
}

const UserProject = ({ project }: UserProjectProps) => {
    const [user, setUser] = useRecoilState(userAtom);
    const [tasks, setTasks] = useState<taskType[]>([]);

    useEffect(() => {
        const fetchTask = async () => {
            const res = await makeRequest(`/project/${project.projectId}/task?status=pending&assignTo=${user._id}`)
            setTasks(res.data.tasks);
        }
        fetchTask();
    }, [])

    return (
        <>
            {
                tasks?.map((task, i) => (
                    <DashTask key={i} taskId={task.taskId} />
                ))
            }
        </>
    )
}

export default UserProject
