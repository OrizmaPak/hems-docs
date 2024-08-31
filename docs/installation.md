---
sidebar_position: 3
---

# HEMSEdu - School Installation
Database and Database User Creation on Server

Log into your cPanel.

![cPanel Login](https://docs.infixedu.com/~gitbook/image?url=https%3A%2F%2F1240498282-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-M57JYJf3oU4p300aQNV%252F-M57gifNIAg_ofvuUeAZ%252F-M57gm9fml4tX-BPwvzA%252FcPanelLogin.png%3Falt%3Dmedia%26token%3D8ad27b43-f5f7-49c9-bcd5-f4a6b90dfeee&amp;width=300&amp;dpr=4&amp;quality=100&amp;sign=f65f8626&amp;sv=1)

Click the MySQL Database Wizard under the Databases heading.

Next to "New Database," enter a name for your database and click Next Step.

Next to "Username," enter a username. Enter a password next to "Password," enter it again for "Password (Again)," and then click Create User.

On the next page, you'll assign privileges for the user to the database. Check the box next to "All Privileges" and then click Next Step.

Upload the Package to Your Host

Download the package from CodeCanyon or from HEMSedu.com Website.

Unzip the package, and you'll find the following contents:

- Documentation
- HEMSEdu v.xxx

Upload file "upload.zip" to your host inside the desired location using cPanel File Manager.

After the upload is completed, right-click on the package and select Extract. That will extract the zipped file contents.

Configure HEMSEdu with Database Credentials

Use the file manager to edit the file in the path .env.

Add Database configuration in the file as described in the below image.

Adjust the Folders Permissions

Change the permissions of the uploads folder and all its contents (Files & Folders) to 777.

Change the permissions of the storage folder and all its contents (Files & Folders) to 777.

Start the Installation

Use your browser to run the HEMS install Script. Type in your application location followed by /install in the browser and hit Start Installation.

Checking CodeCanyon Credentials. If everything is okay, press Next Step.

Checking Database configuration and Files & Folders permissions. If everything is okay, press Next Step.

Type in Administrator Details, Site Settings, Default Academic Year & License Code. Then press Next Step.

Installation Complete

Video Tutorial for the HEMSEdu cPanel Installation