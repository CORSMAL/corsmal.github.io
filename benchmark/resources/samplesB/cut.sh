#!/bin/bash

ffmpeg -i subject1_grasp1.mp4 -ss 00:00:10 -to 0:00:15 -async 1 subject1_grasp1_cut.mp4 &
ffmpeg -i subject1_grasp2.mp4 -ss 00:00:11 -to 0:00:16 -async 1 subject1_grasp2_cut.mp4 &

ffmpeg -i subject2_grasp1.mp4 -ss 00:00:10 -to 0:00:16 -async 1 subject2_grasp1_cut.mp4 &
ffmpeg -i subject2_grasp2.mp4 -ss 00:00:11 -to 0:00:17 -async 1 subject2_grasp2_cut.mp4 &

ffmpeg -i subject3_grasp1.mp4 -ss 00:00:11 -to 0:00:16 -async 1 subject3_grasp1_cut.mp4 &
ffmpeg -i subject3_grasp2.mp4 -ss 00:00:11 -to 0:00:17 -async 1 subject3_grasp2_cut.mp4 &


wait