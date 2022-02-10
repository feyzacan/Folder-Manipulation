/*
This program was created for file/folder manipulation.

Cases such as the specified folders and files do not exist,  
the files that are attempted to be copied or moved already exist in the targeted folders, and
existence of a file in more than one folder are taken into account.

If a file is to be moved or copied to a folder that does not contain "files", "files" is created first. 
Then the move or copy is performed.

move(fileId, folderId) searches for the specified file, deletes the file from the folders it is in, and adds it to the specified folder if it exists.
copy(fileId, folderId) searches for the specified file and adds a copy of it to the specified folder if it exists.
remove(fileId) searches for all copies of the specified file and deletes them all if they exist.
removeOne(fileId, folderId) searches for the specified file in the specified folder and deletes this file if it exists. 
removeFolder(folderId) searches for the specified folder, and if it exists, deletes this folder with all the files it contains.
parentFolderOf(fileId) searches for the specified file, and if it exists, outputs the id numbers of the folder or folders in which searched file is located.
*/

const folders = [
  {
    id: 1,
    name: 'Folder 1',
    files: [
      { id: 10, name: 'img.jpg' },
      { id: 11, name: 'index.html' },
      { id: 12, name: 'app.js' }
    ]
  },
  {
    id: 2,
    name: 'Folder 2',
    files: [
      { id: 13, name: 'app.css' },
      { id: 14, name: 'picture.png' },
      { id: 15, name: 'react.ico' },
      { id: 16, name: 'dosya.xls' },
      { id: 12, name: 'app.js' }
    ]
  },
  {
    id: 3,
    name: 'Folder 3'
  },
  {
    id: 4,
    name: 'Folder 4',
    files: [
      { id: 17, name: 'readme.md' },
      { id: 18, name: 'image.png' },
      { id: 19, name: 'home.ejs' }
    ]
  },

  {
    id: 5,
    name: 'Folder 5',
    files: [
      { id: 20, name: 'style.css' }
    ]
  }
]


let targetedFile
let targetedFolder
let filesArray


// MOVE A SPECIFIC FILE TO A SPECIFIC FOLDER

function move(fileId, folderId) {
  let found = 0
  // ERROR HANDLING - in case the targeted folder is not exist
  if (!folders.find(x => x.id === folderId)) {
    console.log("Targeted folder is not exist!")
  } else {
    if (!folders.find(x => x.id === folderId).files) {
      //CREATING A "FILES" FOLDER IN THE TARGETED FOLDER IF NOT EXIST
      folders.find(x => x.id === folderId).files = []
    }
    // DEFINING THE TARGETED FOLDER
    let targetedFolder = folders.find(x => x.id === folderId).files
    // ERROR HANDLING - in case the file is already located in the specified folder
    if (targetedFolder.find(x => x.id === fileId)) {
      console.log("This file is already in the targeted folder!")
    } else {
      for (let i = 0; i < folders.length; i++) {
        if (folders[i].files) {
          // FINDING THE TARGETED FILE
          targetedFile = folders[i].files.find(x => x.id === fileId)
        } else {
          targetedFile = null
        }
        if (targetedFile) {
          // CALCULATING HOW MANY FILES ARE FOUND IN FOLDERS
          found += 1
          filesArray = folders[i].files
          // REMOVING THE TARGETED FILE FROM THE FOLDER/FOLDERS IT IS CURRENTLY IN
          filesArray.splice(filesArray.indexOf(targetedFile), 1)
          if (!targetedFolder.find(x => x.id === fileId)) {
            // ADDING THE TARGETED FILE TO THE TARGETED FOLDER IF IT IS NOT ALREADY EXIST
            targetedFolder.push(targetedFile)
          }
        }
      }
      if (found === 0) {
        // ERROR HANDLING - in case the file is not exist
        console.log("This file is not exist!")
      }
    }
  }
}


// COPY A SPECIFIC FILE TO A SPECIFIC FOLDER

function copy(fileId, folderId) {
  let found = 0
  // ERROR HANDLING - in case the targeted folder is not exist
  if (!folders.find(x => x.id === folderId)) {
    console.log("Targeted folder is not exist!")
  } else {
    if (!folders.find(x => x.id === folderId).files) {
      //CREATING A "FILES" FOLDER IN THE TARGETED FOLDER IF NOT EXIST
      folders.find(x => x.id === folderId).files = []
    }
    // DEFINING THE TARGETED FOLDER
    let targetedFolder = folders.find(x => x.id === folderId).files
    // ERROR HANDLING - in case the file is already located in the specified folder
    if (targetedFolder.find(x => x.id === fileId)) {
      console.log("This file is already in the targeted folder!")
    } else {
      for (let i = 0; i < folders.length; i++) {
        if (folders[i].files) {
          // FINDING THE TARGETED FILE
          targetedFile = folders[i].files.find(x => x.id === fileId)
        } else {
          targetedFile = null
        }
        if (targetedFile) {
          // CALCULATING HOW MANY FILES ARE FOUND IN FOLDERS
          found += 1
          if (!targetedFolder.find(x => x.id === fileId)) {
            // ADDING THE TARGETED FILE TO THE TARGETED FOLDER IF IT IS NOT ALREADY EXIST
            targetedFolder.push(targetedFile)
          }
        }
      }
      if (found === 0) {
        // ERROR HANDLING - in case the file is not exist
        console.log("This file is not exist!")
      }
    }
  }
}


// REMOVE A SPECIFIC FILE

function remove(fileId) {
  let found = 0
  for (let i = 0; i < folders.length; i++) {
    if (folders[i].files) {
      // DEFINING THE TARGETED FILE/FILES
      targetedFile = folders[i].files.find(x => x.id === fileId)
    } else {
      targetedFile = null
    }
    if (targetedFile) {
      // CALCULATING HOW MANY FILES ARE FOUND IN FOLDERS
      found += 1
      filesArray = folders[i].files
      // REMOVING THE TARGETED FILE FROM THE FOLDER IT IS IN
      filesArray.splice(filesArray.indexOf(targetedFile), 1)
    }
  }
  if (found === 0) {
    // ERROR HANDLING
    console.log("This file is not exist!")
    // OUTPUT OF HOW MANY FILES HAVE BEEN DELETED
  } else if (found === 1) {
    console.log("1 file is deleted!")
  } else {
    console.log(`${found} files are deleted!`)
  }
}


// REMOVE A SPECIFIC FILE IN A SPECIFIC FOLDER

function removeOne(fileId, folderId) {
  // ERROR HANDLING - in case the targeted folder is not exist
  if (!folders.find(x => x.id === folderId)) {
    console.log("Targeted folder is not exist!")
  } else {
    filesArray = folders.find(x => x.id === folderId).files
    if (folders.find(x => x.id === folderId).files) {
      // DEFINING THE TARGETED FILE/FILES
      targetedFile = folders.find(x => x.id === folderId).files.find(x => x.id === fileId)
    } else {
      targetedFile = null
    }
    if (targetedFile) {
      // REMOVING THE TARGETED FILE FROM THE TARGETED FOLDER
      filesArray.splice(filesArray.indexOf(targetedFile), 1)
    } else {
      // ERROR HANDLING - in case the file is not exist
      console.log("This file is not exist in specified folder!")
    }
  }
}


// REMOVE A SPECIFIC FOLDER

function removeFolder(folderId) {
  // FINDING THE TARGETED FOLDER
  if (folders.find(x => x.id === folderId)) {
    // REMOVING THE TARGETED FOLDER
    folders.splice(folders.indexOf(folders.find(x => x.id === folderId)), 1)
    // ERROR HANDLING - in case the file is not exist
  } else { console.log("This folder is not exist!") }
}


// FINDING THE PARENT FOLDER/FOLDERS OF A SPECIFIC FILE

function parentFolderOf(fileId) {
  let found = 0
  let foundArray = []
  for (let i = 0; i < folders.length; i++) {
    if (folders[i].files) {
      // DEFINING THE TARGETED FILE/FILES
      targetedFile = folders[i].files.find(x => x.id === fileId)
    } else {
      targetedFile = null
    }
    if (targetedFile) {
      // CALCULATING HOW MANY FILES ARE FOUND IN FOLDERS
      found += 1
      // CREATING AN ARRAY CONTAINING THE ID NUMBER/NUMBERS OF THE PARENT FOLDER/FOLDERS
      foundArray.push(folders[i].id)
    }
  }
  if (found === 0) {
    // ERROR HANDLING - in case the file is not exist
    console.log("This file is not exist!")
  } else if (found === 1) {
    // OUTPUT OF PARENT FOLDER ID
    console.log(`The file with id number ${fileId} is located in the folder with id number ${foundArray}`)
  } else {
    // OUTPUT OF PARENT FOLDERS ID's
    console.log(`The files with id number ${fileId} is located in the folders with following id numbers: ${foundArray}`)
  }
}


// move(fileId, folderId)
// copy(fileId, folderId)
// remove(fileId)
// removeOne(fileId, folderId)
// removeFolder(folderId)
// parentFolderOf(fileId)

move(25, 8)
//copy(12, 3)
//remove(11)
//removeOne(18, 3)
// removeFolder(3)
//parentFolderOf(12)

console.log(folders)
