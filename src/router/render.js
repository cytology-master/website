// import { readdirSync,  lstatSync} from 'fs'
// import { join, basename } from 'path'
// import { Router } from 'express'
// import serverOptions from '../properties'

// const router = Router()
// const folderPath = join(__dirname, '../../resources/map')

// function isFile(path) {
//     return lstatSync(path).isFile()
// }
// function getMap(dir=folderPath){
//     return readdirSync(dir)
// }

// function getRealPath(path, dir=folderPath, prefix="") {
//     const map = getMap(dir)
//     var realPath = ""
//     if (path == "/") realPath = "/__index.json"
//     else if (map.includes(path.substring(1)))realPath = prefix+"/__index.json"
//     else if (map.includes(path.substring(1)+".json")) realPath = prefix+path+".json"
//     return realPath
// }

// function renderController(request, response) {
//     const options = {
//         'host': serverOptions.host,
//         'port': serverOptions.port,
//         'path': getRealPath(request.path)
//     }
// }

// function render(files, prefix="", dir=folderPath) {
//     files.forEach(function(el) {
//         if (isFile(el)) {
//             if (basename(el) == "__index") {
//                 router.get("/"+prefix, render)
//             } else {
//                 router.get("/"+prefix+basename(el), render)
//             }
//         } else {
//             render(getMap(join(dir, el)), prefix+"/"+el, join(dir, el))
//         }
//     })
// }
// export default function() {
//     const files = getMap()
// }