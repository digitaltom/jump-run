var levels = [
    {
        name:"Level 0",
        theme: 'snoop',
        template:[
            "  123                 ##",
            "  456                   ",
            "           #######      ",
            "                        ",
            "  #####                 ",
            "                      ##",
            "          ####          ",
            "                        ",
            "                        ",
            "  ~~~~     #############",
            "   ^                    ",
            "  /ü`                   ",
            "xxxxxxxxxxxxxxxxxxxxxxxx"
        ]
    },
    {
        name:"SUSE",
        theme: 'suse',
        template:[
            "  123                 ######     ########    ######    #####  ",
            "  456                                                         ",
            "           #######                  #### #  # #### ####       ",
            "                                    #    #  # #    #          ",
            "  #####                             #### #  # #### ###        ",
            "                      ######           # #  #    # #          ",
            "          ####                      #### #### #### ####       ",
            "                                                              ",
            "                                                              ",
            "  ~~~~     ######################    ######################   ",
            "   ^                                                          ",
            "  /ü`                                                         ",
            "xxxxxxxxxxx@@@@@@@@@@@@@@@@@@@@@@xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        ]
    },
    {
        name:"Mario Level 1",
        theme: 'super_mario',
        template:[
            "      13           13      1223                                              13                                                                                                                                                                     ",
            "      46           46      4556           13                  13             46      1223                                13                                                                    13                                     13            ",
            "                                          46                  46                     4556                                46                      1223                                  13      46          1223                       46            ",
            "                                                                                                 p                                               4556                                  46                  4556                                     ",
            "                        ?                                                                  #########     #####?                               ###     #??#                                                              HH         °                ",
            "                                                                                                                                                                                                                       HHH        'R                ",
            "                                                                                                                                                                                                                      HHHH         |     *          ",
            "                                                                           k          p                                                                                                                              HHHHH         |    WWW         ",
            "                ?     #?#?#                       qw          qw                     #?#                      #        #k     ?  ?  ?      #           ##           H  H         HH  H                ##?#          HHHHHH         |    lXj         ",
            "    ^                                     qw      as    ^     as                                                 ^                                                 HH  HH   ^   HHH  HH                            HHHHHHH     ^   |   WUUUW        ",
            "   /ü`            ^              qw       as      as   /ü`    as        ^                                       /ü`                    ^                          HHH  HHH /ü` HHHH  HHH    ^   qw             qw HHHHHHHH    /ü`  |   XXOXX  ^     ",
            "  /ügü`      {=} /ü`  p          as       as p{=} as p/ügü`p  as  {==} /ü`      {=}                  {=}      p/ügü`p          {==}   /ü`     /`p p  p p         HHHH==HHHHügüHHHHH  HHHH} /ü`  as   {=}   p p asHHHHHHHHH   /ügü` H   XXBXX}/ü`    ",
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@@xxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        ]
    },
    {
        name:"Bauersman",
        theme: 'super_mario',
        template:[
            "      13           13      1223                                              13                                                                                                                                                                                       ",
            "      46           46      4556           13                  13             46      1223                                                                                                                                                                      x    13                                                                    13                                     13            ",
            "                                          46                  46                     4556                                 xx    xx   xxxx   xxxxx   xxxxx  xx    xx      xxxxx   xx xxxxxx xxxxxxxxx xx    xx xxxx      xxxx   xx    xx     xxxxx     xxxx        x    46                      1223                                  13      46          1223                       46            ",
            "                                                                                                 p                        xx    xx  xx  xx  xx  xx  xx  xx  xx  xx       xx  xx  xx xx  xx xxxxxxxxx xx    xx xx xx    xx  xx   xx  xx      xx  xx   xx  xx       x                            4556                                  46                  4556                                     ",
            "                        ?                                                                  #########     #####?           xx    xx xx    xx xx   xx xx   xx  xxxx        xx  xx  xx xx  xx    xx     xx    xx xx  xx  xx    xx   xxxx       xx  xx  xx    xx              x                         ###     #??#                                                              HH         °                ",
            "                                                                                                                          xxxxxxxx xx    xx xx  xx  xx  xx    xx         xxxxxx  xx xxxxx     xx     xxxxxxxx xx   xx xx    xx    xx        xxxxxx  xx    xx                  x                                                                                                  HHH        'R                ",
            "                                                                                                                          xxxxxxxx xxxxxxxx xxxxx   xxxxx     xx         xx  xx  xx xx x      xx     xxxxxxxx xx   xx xxxxxxxx    xx        xx  xx  xxxxxxxx                       x                                                                                                 HHHH         |     *          ",
            "                                                                           k          p                                   xx    xx xx    xx xx      xx        xx         xx   xx xx xx xx     xx     xx    xx xx  xx  xx    xx    xx        xx   xx xx    xx                 x                                                                                                HHHHH         |    WWW         ",
            "                ?     #?#?#                       qw          qw                     #?#                      #           xx    xx xx    xx xx      xx        xx         xx   xx xx xx  xx    xx     xx    xx xx xx   xx    xx    xx        xx   xx xx    xx                   x  #k     ?  ?  ?      #           ##           H  H         HH  H                ##?#          HHHHHH         |    lXj         ",
            "    ^                                     qw      as    ^     as                                                 ^        xx    xx xx    xx xx      xx        xx         xxxxxx  xx xx   xx   xx     xx    xx xxxx    xx    xx    xx        xxxxxx  xx    xx                   x                                              HH  HH   ^   HHH  HH                            HHHHHHH     ^   |   WUUUW        ",
            "   /ü`            ^              qw       as      as   /ü`    as        ^                                       /ü`                                                                                                                                         x                  ^                          HHH  HHH /ü` HHHH  HHH    ^   qw             qw HHHHHHHH    /ü`  |   XXOXX  ^     ",
            "  /ügü`      {=} /ü`  p          as       as p{=} as p/ügü`p  as  {==} /ü`      {=}                  {=}      p/ügü`p                                                                                                                                   x          {==}   /ü`     /`p p  p p         HHHH==HHHHügüHHHHH  HHHH} /ü`  as   {=}   p p asHHHHHHHHH   /ügü` H   XXBXX}/ü`    ",
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@@xxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        ]
    }
];
