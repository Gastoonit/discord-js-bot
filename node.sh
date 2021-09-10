export CN_DIR=$HOME/$REPL_SLUG/node_modules/node
export NODE_VERSION=16

if ! ls $CN_DIR > /dev/null 2>&1 
then npm i node@$NODE_VERSION
fi

#just to check if any package is missing
npm outdated | grep "MISSING"
if [ $? -eq 0 ]
then NODE_PATH=$HOME/$REPL_SLUG/node_modules/node/bin npm i
fi

$HOME/$REPL_SLUG/node_modules/node/bin/node .