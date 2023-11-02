// import { createRecordsExporter } from "@awarns/persistence";

// // Other dependencies
// import { Folder, knownFolders, path } from "@nativescript/core";
// import { ShareFile } from "@nativescript-community/ui-share-file"; // To use system sharing UI
// import { Zip } from "@nativescript/zip"; // To compress file

// export async function exportData(exportWindowTitle: string) {
//     // Folder where data will be exported
//     const exportsFolder = knownFolders.temp().getFolder(EXPORTS_FOLDER);

//     // Export records in json format
//     await createRecordsExporter(exportsFolder, "json", this.userResponse).export();
   
//     const zipPath = path.join(
//         knownFolders.temp().path,
//         `data-${Date.now()}.zip`
//     );

//     // Compress data
//     await Zip.zip({
//         directory: exportsFolder.path,
//         archive: zipPath,
//     });

//     // Open system sharing UI
//     const shareFile = new ShareFile();
//     try {
//         await shareFile.open({
//             path: zipPath,
//             title: exportWindowTitle,
//         });
//     } catch (e) {
//         console.error(e);
//     }
// }