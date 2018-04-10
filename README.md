# AK-RSPE

The AK-RSPE plugin has a few requirements in order to function properly. They are as follows:

This plugin was developed for PowerSchool 10 and 11. It should work with 9 but I doubt it will work with any version before that as it requires AngularJS.

You are required to have a Log Category named RSPE. To create a category (if you have the necessary rights) from the start page in District Office click on District under Setup. On the District Setup page click on the Log Types link under Discipline and Log Entries. On the Log Types page click on the New button and type RSPE as the Log Type on the Edit Log Type page and click on the Submit button. If you already have a Log Type for Restraint and Seclusion you can simply rename the existing log type to RSPE. This will not populate the necessary fields for the plugin reports with your previous data as the plugin creates new fields. Once you have created the log type you can also create the subtypes by clicking on the Edit Subtypes hyperlink in the RSPE log type row.

The subtypes are :

PE - Physical Restraint
S - Seclusion
R - Restraint
Once you have created the RSPE log type and subtypes you will need to give group permissions to whomever should have access to the RSPE Logs. To grant permissions, from the Start page at the District Office click on System under Setup. On the System Administrator page click on Groups under Security. Select the group you would like to grant access by clicking on the group name and under Accessible Log Types click on the checkbox for RSPE. Repeat the process for all of the groups you would like to grant access as all groups will be denied initially.
After the plugin is installed on your system you should set page permissions for the Log Entry Page (RSPE Logs) to prevent unauthorized access.

4/10/2018 This plugin no longer uses object reports to print the individual logs. There is now an HTML report that is included in the plugin zip file.
