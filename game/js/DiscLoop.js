/*


#Disc AI

## Object should be able to:

* runs in a loop which can be difficulty controlled
* know which 'lanes' are safe to spawn in
* allow for an adjustable speed (really Disc obj related)
* random 'faster than usual' discs (really Disc obj related)

## A given lane is not safe to spawn in if:

* a given lane has a disc in it that will not be clear of the game grid by the time it reaches game grid
* spawning the disc would mean a complete block (three lanes with discs nor far enough apart to dodge)

## Assertions

* each lane should have a status at each game frame
* there are 6 lanes (3 vertical, 3 horizontal)
* each lane has two possible spawn positions, one at each end
* each lane can have a no disc in it, a disc entering the game zone, a disc in the game zone, or a disc leaving the game zone.


*/
