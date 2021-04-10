const Project = require('../models/projects');
const cronRegex = "^((((\d+,)+\d+|(\d+(\/|-|#)\d+)|\d+L?|\*(\/\d+)?|L(-\d+)?|\?|[A-Z]{3}(-[A-Z]{3})?) ?){5,7})$|(@(annually|yearly|monthly|weekly|daily|hourly|reboot))|(@every (\d+(ns|us|µs|ms|s|m|h))+)"
const execCtrl = require('../controllers/execution');
const bullInt = require('../controllers/bullIntegration');
const mongoose = require('mongoose');
const utils = require('../lib/utils');

const create = async (body) => {

    try {
        if (!body.name) return { error: 'field name missing' };
        if (!body.type) return { error: 'field type missing' };
        if (!body.description) return { error: 'field description missing' };
        if (!body.recurrence) return { error: 'field cron missing' };
        if (!body.config) return { error: 'field config is missing' };

        const combinations = utils.combinations(Object.values(body.config.config), Object.keys(body.config.config));

        const jsonConfig = combinations.reduce((acc, combination) => {
            const homeType = combination.homes.country ? 'countries' : 'cities';
            return acc.concat([{ 
                age_min: combination.ageRanges?.minAge,
                age_max: combination.ageRanges?.maxAge,
                genders: [combination.sexs.id],
                geo_locations: {
                    [homeType]: [{
                        key: combination.homes.country ? combination.homes.country.key : combination.homes.city.key,
                    }],
                    location_types: [combination.homes.location_type]
                },
                facebook_positions: ["feed", "instant_article", "instream_video", "marketplace"],
                device_platforms: ["mobile","desktop"],
                publisher_platforms:["facebook","messenger"],
                messenger_positions:["messenger_home"],
                flexible_spec: [{
                    id: combination.expats.id,
                    name: combination.expats.name
                }]
            }
        ])}, []);

        body.jsonConfig = jsonConfig;
        const newPr = new Project(body);
        const result = await newPr.save();
        return result;
    } catch (e) {
        console.log('Error creating Project: ', e);
        return ({ error: e });
    }
}

const getAll = async () => {
    try {
        return await Project.find({}).sort({_id:-1})
    } catch (e) {
        console.log('Error getting Projects: ', e);
        return ({ error: e });
    }
}

const getById = async (id) => {
    try {
        return await Project.findById(id);
    } catch (e) {
        console.log('Error getting Projects: ', e);
        return ({ error: e });
    }
}

const getByW = async (w) => {
    try {
        return await Project.findOne(w)
    } catch (e) {
        console.log('Error getting Projects: ', e);
        return ({ error: e });
    }
}

const getAllByW = async (w) => {
    try {
        console.log('getAllByW', w)
        return await Project.find(w)
    } catch (e) {
        console.log('Error getting Projects: ', e);
        return ({ error: e });
    }
}

const update = async (id, body) => {
    try {
        return await Project.findOneAndUpdate(id, body, { new: true });
    } catch (e) {
        console.log(e);
        return { error: e };
    }
}

const deleteById = async (id) => {
    try {
        return await Project.findByIdAndRemove(id);
    } catch (e) {
        console.log(e);
        return { error: e };
    }

}

const createExecutions = async (id) => {
    try {
        const project = await Project.findById(id);
        console.log('Project', project);
        return project.jsonConfig.map(async (value) => await execCtrl.create({status: 'initial', config: value, projectId: mongoose.Types.ObjectId(id)}));
    } catch (e) {
        console.log('Error creating executions: ', e);
        return ({ error: e });
    }
};

const runProject = async (id) => {
    try {
        let executions = await execCtrl.getAllByW({projectId: mongoose.Types.ObjectId(id)});
        console.log('Executions: ', executions);
        executions = executions.map((val) => { return { name: val._id, data: val } });
        await bullInt.addToQueueBulk('works', executions);
        return {};
    } catch (e) {
        console.log('Error running project: ', e);
        return ({ error: e });
    };
}

module.exports = {
    create,
    getAll,
    getById,
    getByW,
    getAllByW,
    update,
    deleteById,
    createExecutions,
    runProject
};