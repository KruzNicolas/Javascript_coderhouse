
kaboom({
    global: true,
    fullscreen: false,
    scale: 1.5,
    debug: true,
    clearColor: [0, 0, 0, 1],

})

const moveSpeed = 120
const slicerSpeed = 150
const skeletonSpeed = 200

loadRoot('https://i.imgur.com/')
loadSprite('linkGoingUp','UkV0we0.png') 
loadSprite('linkGoingDown','tVtlP6y.png') 
loadSprite('linkGoingLeft','1Xq9biB.png') 
loadSprite('linkGoingRight','yZIb8O2.png') 
loadSprite('topWall','QA257Bj.png') 
loadSprite('bottomWall','vWJWmvb.png') 
loadSprite('leftWall','rfDoaa1.png') 
loadSprite('rightWall','SmHhgUn.png') 
loadSprite('topLeftWall','xlpUxIm.png') 
loadSprite('topRightWall','z0OmBd1.png') 
loadSprite('bottomLeftWall','awnTfNC.png') 
loadSprite('bottomRightWall','84oyTFy.png') 
loadSprite('topDoor','U9nre4n.png') 
loadSprite('leftDoor','okdJNls.png') 
loadSprite('firePot','I7xSp7w.png') 
loadSprite('lanterns','wiSiY09.png') 
loadSprite('slicer','c6JFi5Z.png') 
loadSprite('skeleton','Ei1VnX8.png')
loadSprite('stairs','VghkL08.png')  
loadSprite('bomb','o9WizfI.png') 
loadSprite('bg','u4DVsx6.png') 



scene('game', ({ level, score }) => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const maps = [
        [
            'qkwwwwiwke',
            'a        d',
            'a  b     d',
            'a   l    d',
            'j    b   d',
            'a     b  d',
            'a  b     d',
            'a     b  d',
            'a        d',
            'zksssssskc',
        ],
        [
            'qkwwwwwwwe',
            'a        d',
            'a  f  p  d',
            'a        d',
            'a        d',
            'a     r  d',
            'a p      d',
            'a     f  d',
            'a        d',
            'zksssssskc',
        ]

    ]

    const levelCfg = {
        width: 48,
        height: 48,
        'w': [sprite('topWall'), solid(), 'wall'],
        's': [sprite('bottomWall'), solid(), 'wall'],
        'a': [sprite('leftWall'), solid(), 'wall'],
        'd': [sprite('rightWall'), solid(), 'wall'],
        'q': [sprite('topLeftWall'), solid(), 'wall'],
        'e': [sprite('topRightWall'), solid(), 'wall'],
        'z': [sprite('bottomLeftWall'), solid(), 'wall'],
        'c': [sprite('bottomRightWall'), solid(), 'wall'],
        'l': [sprite('firePot'), solid(), 'wall'],
        'k': [sprite('lanterns'), solid(), 'wall'],
        'i': [sprite('topDoor'), 'nextLevel', 'wall'],
        'j': [sprite('leftDoor'), 'door', 'wall'],
        'r': [sprite('stairs'), 'nextLevel'],
        'b': [sprite('slicer'), 'slicer', {dir: -1}, 'enemy'],
        'f': [sprite('skeleton'),'skeletonUpToDown', {dir: -1, timer: 0}, 'enemy'],
        'p': [sprite('skeleton'),'skeletonLeftToRight', {dir: -1, timer: 0}, 'enemy'],
    }

    addLevel(maps[level], levelCfg)

    add([sprite('bg'), layer('bg')])

    const scoreLabel = add([
      text('Score: 0'),
      pos(490, 50),
      layer('ui'),
      {
        value: score,
      },
      scale(2),
    ])
  
    add([text('level ' + parseInt(level + 1)), pos(487, 25), scale(2)])
    add([text('Pre-Alpha ver 1.0'), pos(485, 465), scale(1)])

    const player = add([
        sprite('linkGoingRight'),
        pos(5, 190),
        {
            dir: vec2(1, 0),
        }
    ])

    player.action(() => {
        player.resolve()
    })

    player.overlaps('nextLevel', () => {
        go('game', {
            level: (level + 1) % maps.length,
            score: scoreLabel.value,
        })
    })

    keyDown('up', () => {
        player.changeSprite('linkGoingUp')
        player.move(0, -moveSpeed)
        player.dir = vec2(0, -1)
    })

    keyDown('w', () => {
        player.changeSprite('linkGoingUp')
        player.move(0, -moveSpeed)
        player.dir = vec2(0, -1)
    })

    keyDown('down', () => {
        player.changeSprite('linkGoingDown')
        player.move(0, moveSpeed)
        player.dir = vec2(0, 1)
    })

    keyDown('s', () => {
        player.changeSprite('linkGoingDown')
        player.move(0, moveSpeed)
        player.dir = vec2(0, 1)
    })

    keyDown('right', () => {
        player.changeSprite('linkGoingRight')
        player.move(moveSpeed, 0)
        player.dir = vec2(1, 0)
    })

    keyDown('d', () => {
        player.changeSprite('linkGoingRight')
        player.move(moveSpeed, 0)
        player.dir = vec2(1, 0)
    })

    keyDown('left', () => {
        player.changeSprite('linkGoingLeft')
        player.move(-moveSpeed, 0)
        player.dir = vec2(-1, 0)
    })

    keyDown('a', () => {
        player.changeSprite('linkGoingLeft')
        player.move(-moveSpeed, 0)
        player.dir = vec2(-1, 0)
    })

    player.collides('door', (d) => {
        destroy(d)
    })

    function useBomb (p){
        const obj = add([sprite('bomb'), pos(p), 'bomb'])
        wait(1, () => {
            destroy(obj)
        })
    }

    keyPress('space', () => {
        useBomb(player.pos.add(player.dir.scale(48)))
    })

    collides('bomb', 'skeletonUpToDown', (b, s) => {
        camShake(8)
        wait(1, () => {
            destroy(b)
        })
        destroy(s)
        scoreLabel.value++
        scoreLabel.text = 'Score: ' + scoreLabel.value
    })

    collides('bomb', 'skeletonLeftToRight', (b, s) => {
        camShake(8)
        wait(1, () => {
            destroy(b)
        })
        destroy(s)
        scoreLabel.value++
        scoreLabel.text = 'Score: ' + scoreLabel.value
    })

    action('slicer', (s) => {
        s.move(s.dir * slicerSpeed, 0)
    })

    collides('slicer', 'wall', (s) => {
        s.dir = -s.dir
    })

    action('skeletonUpToDown', (s) => {
        s.move(0, s.dir * skeletonSpeed,)
        s.timer -= dt()
        if (s.timer <= 0){
            s.dir = -s.dir
            s.timer = rand(5)
        }
    })

    action('skeletonLeftToRight', (s) => {
        s.move(s.dir * skeletonSpeed, 0)
        s.timer -= dt()
        if (s.timer <= 0){
            s.dir = -s.dir
            s.timer = rand(5)
        }
    })


    collides('skeletonUpToDown', 'wall', (s) => {
        s.dir = -s.dir
    })

    collides('skeletonLeftToRight', 'wall', (s) => {
        s.dir = -s.dir
    })

    player.overlaps('enemy', () => {
        go('lose', { score: scoreLabel.value })
    })
})

scene('lose', ({ score }) => {
    add([text(score, 32), origin('center'), pos(width() / 2, height() / 2)])
    keyPress('w', () => {
        start('game', { level: 1, score: 0} )
    })
  })

start('game', { level: 0, score: 0} )
 