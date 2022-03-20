

function PosTrans(points){
    for(var i=0;i<points.length;i++){
        ConvertedPoints.push({lng:wgs84tobd09(points[i].lng, points[i].lat)[0],
            lat:wgs84tobd09(points[i].lng, points[i].lat)[1],
            speed:points[i].speed,
            bjtime:points[i].bjtime,
            courseangle:points[i].courseangle,
            height:points[i].height
        })
    }
}