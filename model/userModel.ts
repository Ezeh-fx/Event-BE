import {Schema,Document} from "mongoose";
import { user } from "../interface/userInterface";

interface iuser extends user, Document{}

const userSchema = new Schema()