const fs = require('fs')
const path = require('path')
// Return a list of files of the specified fileTypes in the provided dir,
// with the file path relative to the given dir
// dir: path of the directory you want to search the files for
// fileTypes: array of file types you are search files, ex: ['.txt', '.jpg']
function getFilesFromDir( dir, fileTypes ) {
	var filesToReturn = [];

	function walkDir( currentPath ) {
		var files = fs.readdirSync( currentPath );
		for ( var i in files ) {
			var curFile = path.join( currentPath, files[i] );
			if ( fs.statSync( curFile ).isFile() && fileTypes.indexOf( path.extname( curFile ) ) != -1 ) {
				filesToReturn.push( curFile.replace( dir, '' ) );
			} else if ( fs.statSync( curFile ).isDirectory() ) {
				walkDir( curFile );
			}
		}
	};
	walkDir( dir );
	return filesToReturn;
}

function getSidebar( title, path, collapsable = true, depth = 0 ) {
	var the_path = __filename.split( '/.vuepress' )[0]
	// This needs to work for both windows AND unix
	if ( the_path.includes( '\.vuepress' ) ) {
		the_path = __filename.split( '\.vuepress' )[0]
	}
	var the_files = getFilesFromDir( the_path + path, [".md"] );
	var to_return = []
	var top = ""
	the_files.forEach( file => {
		if ( file.substring( file.length - 3, file.length ) == ".md" ) {
			file = file.substring( 0, file.length - 3 )
			if ( file.toLowerCase() != "index" && file.toLowerCase() != "readme" ) {
				to_return.push( path + file )
			} else {
				top = file
			}
		}
	} );

	var the_return = {
			title: title,
			collapsable: collapsable,
			children: to_return
		};
	return the_return;
}

console.log(getSidebar('Parent Directory 1', '/about/'))
module.exports = {

  title: 'shipDocs',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    sidebar: [
      '/',
      getSidebar('Parent Directory 1', '/about/'),
      getSidebar('Parent Directory 2', '/details/'),
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}
