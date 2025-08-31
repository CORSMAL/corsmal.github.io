#!/bin/bash

ffmpeg -i cup1_left.mp4 -ss 00:00:11 -to 0:00:17 -async 1 cup1_left_cut.mp4 &
ffmpeg -i cup1_middle.mp4 -ss 00:00:19 -to 0:00:25 -async 1 cup1_middle_cut.mp4 &
ffmpeg -i cup1_right.mp4 -ss 00:00:11 -to 0:00:22 -async 1 cup1_right_cut.mp4 &


ffmpeg -i cup2_left.mp4 -ss 00:00:10 -to 0:00:16 -async 1 cup2_left_cut.mp4 &
ffmpeg -i cup2_middle.mp4 -ss 00:00:10 -to 0:00:16 -async 1 cup2_middle_cut.mp4 &
ffmpeg -i cup2_right.mp4 -ss 00:00:10 -to 0:00:17 -async 1 cup2_right_cut.mp4 &

ffmpeg -i cup3_left.mp4 -ss 00:00:10 -to 0:00:16 -async 1 cup3_left_cut.mp4 &
ffmpeg -i cup3_middle.mp4 -ss 00:00:10 -to 0:00:16 -async 1 cup3_middle_cut.mp4 &
ffmpeg -i cup3_right.mp4 -ss 00:00:11 -to 0:00:16 -async 1 cup3_right_cut.mp4 &

ffmpeg -i cup4_left.mp4 -ss 00:00:12 -to 0:00:19 -async 1 cup4_left_cut.mp4 &
ffmpeg -i cup4_middle.mp4 -ss 00:00:10 -to 0:00:16 -async 1 cup4_middle_cut.mp4 &
ffmpeg -i cup4_right.mp4 -ss 00:00:10 -to 0:00:17 -async 1 cup4_right_cut.mp4

wait
