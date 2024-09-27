package com.tds.tds_project.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "subtasks")
public class Subtask {
    @Id
    @Column(name = "sub_id")
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Boolean status;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date begin;

    @Column(name = "\"end\"", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date end;

    @Column(name = "exe_id", nullable = false)
    private Integer executorId;

    @Column(name = "t_id", nullable = false)
    private Integer taskId;

    // Геттеры и сеттеры
}
