import { Types } from "mongoose";

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

// Storing id and status for tasks
export interface taskType extends Document {
    taskId: Types.ObjectId,
    status: string
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
    chatId: Types.ObjectId,
    memberId: Types.ObjectId,
    name: string,
    lastVis: Date,
}

export interface messageType {
    userId: Types.ObjectId,
    message: string,
    timestamp: Date
}

// ----------- User Interface -------------
export interface IUser extends Document {
    _id: Types.ObjectId,   /* Not included in backend interface */
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
    tasks?: taskType[],
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

// Interface for chatSendInput
export interface sendChatIp {
    senderId: Types.ObjectId;
    receiverId: Types.ObjectId;
    senderName: string;
    receiverName: string;
    message: string;
    timestamp: Date
}
