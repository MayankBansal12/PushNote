import { AlertColor } from '@mui/material/Alert'
import { Types } from "mongoose";

// ---------- Global Types---------
export interface AlertPromptProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    eventType?: AlertColor
    text: string
}

export interface AlertTextdef {
    open: boolean,
    text: string,
    eventType: AlertColor
}

export type loginParams = {
    email: string,
    passwd: string
}

export type signupParams = {
    name: string,
    email: string,
    passwd: string
}

// ----------- Db models -------------------

// Storing id and name for users
export interface userType {
    userId: Types.ObjectId,
    name: string
}

// Storing id and name for projects
export interface projectType extends Document {
    projectId: Types.ObjectId,
    name: string
}

// Comments interface for Tasks
export interface commentType extends Document {
    userId: Types.ObjectId,
    userName: string,
    comment: string,
    timestamp?: Date,
}

export interface chatToType {
    chatId: string,
    chatName: string
}


// ----------- User Interface -------------
export interface IUser extends Document {
    name: string,
    role: string,
    email: string,
    passwd: string,
    projects?: projectType[],
    orgId: Types.ObjectId,
    chatTo?: chatToType[],
}

// ----------- Task Interface -------------
export interface ITask extends Document {
    name: string,
    desc: string,
    projectId: Types.ObjectId,
    status?: string;
    assignedBy?: userType;
    assignedTo?: userType[],
    createdBy: userType,
    date: Date,
    deadline?: Date,
    comments?: commentType[]
}

// ----------- Project Interface -------------
export interface IProject extends Document {
    name: string,
    desc: string,
    createdBy: userType,
    date: Date,
    orgId: Types.ObjectId,
    tasks?: Types.ObjectId[],
    users?: userType[]
}

// ----------- Organisation Interface -------------
export interface IOrganisation extends Document {
    name: string,
    email: string,
    passwd: string,
    role: string,
    projects?: projectType[],
    users?: userType[]
}