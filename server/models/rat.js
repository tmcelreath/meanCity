'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RatSchema = new Schema({
    'Unique Key' : Number,
    'Created Date' : Date,
    'Closed Date' : Date,
    'Agency' : String,
    'Agency Name' : String,
    'Complaint Type' : String,
    'Descriptor' : String,
    'Location Type' : String,
    'Incident Zip' : String,
    'Incident Address' : String,
    'Street Name' : String,
    'Cross Street 1' : String,
    'Cross Street 2' : String,
    'Intersection Street 1' : String,
    'Intersection Street 2' : String,
    'Address Type' : String,
    'City' : String,
    'Landmark' : String,
    'Facility Type' : String,
    'Status' : String,
    'Due Date' : Date,
    'Resolution Action Updated Date' : Date,
    'Community Board' : String,
    'Borough' : String,
    'X Coordinate (State Plane)' : String,
    'Y Coordinate (State Plane)' : String,
    'Latitude' : String,
    'Longitude' : String,
    'Location' : String
});

mongoose.model('Rat', RatSchema);