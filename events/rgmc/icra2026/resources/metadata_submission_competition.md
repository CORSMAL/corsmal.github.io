# Metadata for the submission form

| **Column** | **Type** | **Units** | **Allowed values** | **Description** | **Validation** |
| --- | --- | --- | --- | --- | --- |
| **config_id** | string or integer | n/a | organiser IDs | Organiser defined configuration identifier | Must match organiser config list |
| **initial_mass_measured_g** | float | g | > 0 | Measured mass of cup plus content before handover | Must be strictly > 0; measured with a digital scale |
| **target_location_x_mm** | float | mm | real | Target X of container base centre before starting handover |  |
| **target_location_y_mm** | float | mm | real | Target Y of container base centre before starting handover |  |
| **target_location_z_mm** | float | mm | real | Target Z of container base centre before starting handover |  |
| **deliver_flag** | integer | n/a | ``0`` or ``1`` | ``1`` if delivery successful; ``0`` if drop, abort, or failure | If 0 then final_mass_measured_g must be ``-1`` and delivery_location_est_* must be ``-1`` |
| **delivery_location_est_x_mm** | float | mm | real or ``-1`` | Team estimated X of container base centre after placement | If deliver_flag = 1 → any real value; if 0 → must be ``-1`` |
| **delivery_location_est_y_mm** | float | mm | real or ``-1`` | Team estimated Y of container base centre after placement | Same rule as above |
| **delivery_location_est_z_mm** | float | mm | real or ``-1`` | Team estimated Z of container base centre after placement | Same rule as above |
| **final_mass_measured_g** | float | g | ≥ 0 or ``-1`` | Scale reading after execution or ``-1`` if null | If deliver_flag = 0 → must be ``-1``; if 1 → must be ≥ 0 |
| **t_human_first_contact_ms** | integer | ms | ≥ 0 or ``-1`` | Timestamp of human first contact relative to configuration start | If no contact occurred → ``-1`` |
| **t_robot_last_contact_ms** | integer | ms | ≥ 0 or ``-1`` | Timestamp of robot last contact | If no contact occurred → ``-1``; if > 0 → must be ≥ t_human_first_contact_ms |