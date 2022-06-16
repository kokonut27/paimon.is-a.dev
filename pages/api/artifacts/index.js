import { artifacts } from '../data/artifacts';


function dynamicSort(property) {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a,b) {
    if (sortOrder == -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }        
  }
}

export default function handler(req, res) {
  const { num, set, sort, types } = req.query
  const sortTypes = ["rarity", "name"]
  if (set) {
    if (artifacts.ListArtifacts.includes(set)) {
      var index = artifacts.AllArtifacts.findIndex(function(a) {
        return a.name == set;
      });
      // console.log(index)

      res.status(200).json({
        name: artifacts.AllArtifacts[index].name,
        twoPiece: artifacts.AllArtifacts[index].twoPiece,
        fourPiece: artifacts.AllArtifacts[index].fourPiece,
        rarity: artifacts.AllArtifacts[index].rarity
      })
    } else {
      res.status(500).json({
        INTERNAL_SERVER_ERROR: {
          error: "Artifact set does not exist!"
        }
      })
    }
  } else if (num) {
    // console.log(sort);
    try {
      let data = artifacts.AllArtifacts.slice(0, num)
      // console.log(data)
      // console.log(artifacts.AllArtifacts.slice(0, 1))

      if (!data.includes("")) {
        if (sort && sortTypes.includes(sort)) {
          if (sort === "name") {
            data.sort(dynamicSort("name"))
            res.status(200).json({
              artifacts: data
            })
          } else {
            data.sort(function(a, b) {
              return a.rarity - b.rarity;
            });
            res.status(200).json({
              artifacts: data
            })
          }     
        } else if (sort === undefined) {
          res.status(200).json({
            artifacts: data
          })
        } else {
          res.status(500).json({
            INTERNAL_SERVER_ERROR: {
              error: "The server had trouble sorting the artifacts!"
            }
          })
        }
      } else {
        res.status(500).json({
          INTERNAL_SERVER_ERROR: {
            error: "The server had trouble showing artifacts count!"
          }
        })
      }
    } catch(err) {
      res.status(500).json({
        INTERNAL_SERVER_ERROR: {
          error: err.message
        }
      })
    }
  } else if (types) {
    if (types === true || types === false) {
      res.status(200).json({ 
        types: ["num", "set"]
      })
    } else {
      res.status(500).json({
        INTERNAL_SERVER_ERROR: {
          error: "The server had trouble showing artifact API types!"
        }
      })
    }
  } else {
    res.status(200).json({
      artifacts: artifacts.ListArtifacts
    })
  }
}
