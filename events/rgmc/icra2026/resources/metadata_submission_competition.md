# Metadata for the submission form

| **Column** | **Type** | **Units** | **Allowed values** | **Description** | **Validation** |
| --- | --- | --- | --- | --- | --- |
| **config_id** | string or integer | n/a | organiser IDs | Organiser defined configuration identifier | Must match organiser config list |
| **initial_mass_measured_g** | float | g | ≥ 0 | Measured mass of cup plus content before handover | Nonnegative; measured with a digital scale |
| **target_location_x_mm** | float | mm | real | Target X of container base centre before starting handover | Must be within workspace bounds |
| **target_location_y_mm** | float | mm | real | Target Y of container base centre before starting handover  | Must be within workspace bounds |
| **target_location_z_mm** | float | mm | real | Target Z of container base centre before starting handover  | Must be within workspace bounds |
| **deliver_flag** | integer | n/a | ``0`` or ``1`` | ``0`` if no delivery of the container due to drop or failure | If 0 then final_mass_measured_g must be ``-1`` |
| **delivery_location_est_x_mm** | float | mm | real | Team estimated X of container base centre after placement | Must be within workspace bounds |
| **delivery_location_est_y_mm** | float | mm | real | Team estimated Y of container base centre after placement | Must be within workspace bounds |
| **delivery_location_est_z_mm** | float | mm | real | Team estimated Z of container base centre after placement | Must be within workspace bounds |
| **final_mass_measured_g** | float | g | ≥ 0 or ``-1`` | Scale reading after execution or ``-1`` if null | If final_mass_null_flag=0 must be ≥ 0 |
| **t_human_first_contact_ms** | integer | ms | ≥ 0 | Timestamp of human first contact relative to configuration start | 0 ≤ value ≤ trial duration |
| **t_robot_last_contact_ms** | integer | ms | ≥ 0 | Timestamp of robot last contact | Must satisfy t_robot_first_contact_ms ≤ t_robot_last_contact_ms |
