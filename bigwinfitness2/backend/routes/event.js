const eventsRouter = require('express').Router()
const Event = require('../models/event.schema')

//***** GET COMPANY INFO*****
eventsRouter.get('/', async (req, res) => {
    try {
        await EventCounts.find({}).then((event) => {
            res.json(event)
        })
    } catch (error) {
        console.error('Error getting events', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//***** EDIT COMPANY INFO *****
eventsRouter.put('/:id', async (req, res) => {
    try {
        const ID = req.params.id
        if (!ID) {
            return res.status(400).json({ message: 'Id is needed' })
        }
        //Handle empty request body
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'No update data provided' });
        }
        const { name, status, applicationUrl, notes, pointOfContacts } = req.body;

        const companyInfo = {
            name: name,
            status: status,
            applicationUrl: applicationUrl,
            notes: notes,
            pointOfContacts: pointOfContacts || [],
            priority: priority,
        }

        Company
            .findByIdAndUpdate(ID, companyInfo, { new: true })
            .then((updatedCompany) => {
                if (!updatedCompany) {
                    return res.status(404).json({ message: 'Company not found' });
                }
                res.json(updatedCompany)
            })

    } catch (error) {
        console.error('Error Editing Company info')
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//***** ADD COMPANY *****
eventsRouter.post('/', async (req, res) => {
    try {
        const { name, status, applicationUrl, notes, pointOfContact, priority} = req.body 
        
        const newCompany = new Company({
            name,
            status,
            applicationUrl,
            notes,
            pointOfContact,
            priority
        })
        await newCompany.save()

        console.log('Company saved:', newCompany)
        res.status(201).json(newCompany)
    } catch (error) {
        console.error('Error saving company', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//***** DELETE COMPANY *****
eventsRouter.delete('/:id', async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id)

        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' })
        }

        res.json({ message: 'Company Deleted', deletedCompany })
    } catch (error) {
        console.error('Error deleting company:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

//***** GET ALL POINTS OF CONTACTS *****
eventsRouter.get('/all-contacts', async (req, res) => {
    try {
        const eventsPoc = await Company.find({}, 'pointOfContacts -_id')
        const allContacts = eventsPoc
            .map((company) =>
                Array.isArray(company.pointOfContacts)
                    ? company.pointOfContacts
                    : [],
            )
            .flat()

        res.json({ allContacts })
    } catch (error) {
        console.error('Error fetching point of contactS:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// get by id
eventsRouter.get('/:id', async (req, res) => {
    try {
        const companyId = req.params.id
        const company = await Company.findById(companyId)

        if (!company) {
            return res.status(404).json({ message: 'Company not found' })
        }

        res.json(company)
    } catch (error) {
        console.error('Error fetching company by ID', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = eventsRouter
