import PinkModel from '../models/Pink';
import { StatusCodes,  ReasonPhrases  } from 'http-status-codes';

const controller = {
    list: async(req, res) => {
        const list = await PinkModel.find();
        return res.json(list);
    }
}

export default controller;

