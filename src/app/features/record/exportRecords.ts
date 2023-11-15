import { createRecordsExporter } from "@awarns/persistence";
import {RecordsStore} from '@awarns/persistence'
import { QuestionnaireAnswers, contextualRecords } from "./contextualRecords";
// Other dependencies
import { Folder, knownFolders, path } from "@nativescript/core";
import { ShareFile } from "@nativescript-community/ui-share-file"; // To use system sharing UI
import { Zip } from "@nativescript/zip"; // To compress file
// 
import  * as email from '@nativescript/email';
import { zip } from "rxjs";

const EXPORTS_FOLDER = "Records"; //The actual folder name

export async function exportData(exportWindowTitle: string) {
    // Folder where data will be exported
    const exportsFolder = knownFolders.temp().getFolder(EXPORTS_FOLDER);
    const fileName = "exportedData"
    const exportOptions = {
        fileName,
    };
    // Export records in json format
    await createRecordsExporter(exportsFolder, "json", exportOptions).export();
   
    const zipPath = path.join(
        knownFolders.temp().path,
        `Data-${Date.now()}.zip`
    );

    // Compress data
    await Zip.zip({
        directory: exportsFolder.path,
        archive: zipPath,
    });

    // Open system sharing UI
    const shareFile = new ShareFile();
    try {
        await shareFile.open({
            path: zipPath,
            title: exportWindowTitle,
            
            
        });
    } catch (e) {
        console.error(e);
    }


    // try {
    //     email.compose({
    //         subject: 'SoP-Scapes Survey Records',
    //         to: ['al426582@uji.es'],
    //         attachments: [
    //             {
    //                 fileName: exportWindowTitle,
    //                 path: zipPath,
    //                 mimeType: zipPath, // Use the correct MIME type for a ZIP file
    //             }
    //         ],
    //     })
    // } catch (e) {
    //     console.error(e);
    // }
// -----------------------------------------------------------------------
    // email.compose({
	// 	subject: 'SoP-Scapes Survey Records',
	// 	to: ['al426582@uji.es'],
	// 	attachments: [
	// 		{
	// 			fileName: exportWindowTitle,
	// 			path: zipPath,
    //             mimeType: "file/zip",
	// 		}
			
	// 	],
	// })
	// .then(
	// 	function () {
	// 		console.log('Email composer closed');
	// 	},
	// 	function (err) {
	// 		console.log('Error: ' + err);
	// 	}
	// );
// --------------------------------------------------------
    // email.available().then((avail: boolean) => {
    //     console.log("Email available? " + avail);
    
    //     if (avail) {
    //         // Email is available, so compose an email
    //         try {
    //             email.compose({
    //                 subject: 'SoP-Scapes Survey Records',
    //                 to: ['al426582@uji.es'],
    //                 attachments: [
    //                     {
    //                         fileName: exportWindowTitle,
    //                         path: zipPath,
    //                         mimeType: zipPath, // Use the correct MIME type for a ZIP file
    //                     }
    //                 ],
    //             }).then(
    //                 function () {
    //                     console.log('Email composer closed');
    //                 },
    //                 function (err) {
    //                     console.log('Error: ' + err);
    //                 }
    //             );
    //         } catch (e) {
    //             console.error('Error while composing email: ' + e);
    //         }
    //     } else {
    //         console.log('Email is not available.');
    //     }
    // });

}