import "babel-core/register";
import "babel-polyfill"

export async function onChange(files, trescoords, treasures) {
    try {
        var processed_array = await _onFileSelected(files);
        for (var results of processed_array) {

            for (var result of results) {
                trescoords.add(result.coordinates);
                treasures.set(result.coordinates, result.treasure);
            }
        }
    } catch (e) {
        console.log("file", "reading Error " + e);
    }


}


function _onFileSelected(files) {

    var promise = Promise.resolve();
    var array_promises = [];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        array_promises.push(pFileReader(file));
    }


    return Promise.all(array_promises);
}


function pFileReader(file) {
    var reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = function (evnt) {

            if (evnt.target.readyState == FileReader.DONE) {

                resolve(JSON.parse(evnt.target.result));
            }
        }
        if (file) {

            reader.readAsText(file, "UTF-8");
        }
    });
}
