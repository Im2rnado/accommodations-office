const Announcement = require("../models/Announcement");

exports.getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find();
        return res.status(200).json({ success: true, announcements });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.createAnnouncement = async (req, res) => {
    try {
        const { title, message, sender, date } = req.body;
        const newAnnouncement = new Announcement({ title, message, sender, date });
        await newAnnouncement.save();
        return res.status(201).json({ success: true, announcement: newAnnouncement });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.getAnnouncementById = async (req, res) => {
    try {
        const announcement = await Announcement.findById(req.params.id);
        if (!announcement) {
            return res.status(404).json({ success: false, message: "Announcement not found" });
        }
        return res.status(200).json({ success: true, announcement });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.updateAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!announcement) {
            return res.status(404).json({ success: false, message: "Announcement not found" });
        }
        return res.status(200).json({ success: true, announcement });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findByIdAndDelete(req.params.id);
        if (!announcement) {
            return res.status(404).json({ success: false, message: "Announcement not found" });
        }
        return res.status(200).json({ success: true, message: "Announcement deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};