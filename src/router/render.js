import { lstatSync, readdirSync } from "fs"
import { basename, join } from "path"

function getFullPath(name) {
    return join(__dirname, "../../resources/map", prefix, name)
}

function createMap(path, prefix) {
    const map = readdirSync(path).map(function(name) {
        var el = {
            name: basename(name),
            path: getFullPath(name),
            url: "/"+prefix+"/"+name,
            isFile: lstatSync(getFullPath(name)).isFile()
        }
    })
}