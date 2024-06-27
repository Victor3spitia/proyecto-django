import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-hot-toast"

export function TasksFormPage() {
    const { register, handleSubmit, formState: { errors },
        setValue
    } = useForm();
    const navigate = useNavigate();
    const params = useParams()



    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(paarms.id, data)
            toast.success("tarea actualizada", {
                position: "bottom-right",
                style: { background: "#101010", clor: "#fff" }
            })
        } else {
            await createTask(data);
            toast.success("tarea creada", {
                position: "bottom-right",
                style: { background: "#101010", clor: "#fff" }
            })
        }
        navigate("/tasks");
    })


    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const res = await getTask(params.id);
                setValue("title", res.data.title)
                setValue("decription", res.data.description)
            }
        }
        loadTask();
    }, [])

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title"
                    {...register("title", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                />
                {errors.title && <span>campo requerido</span>}
                <textarea rows="3" placeholder="Description"
                    {...register("description", { required: true })}>
                </textarea>
                {errors.description && <span>campo requerido</span>}

                <buttom className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
                    Save</buttom>
            </form>

            {params.id && 
            <div className="flex justify-end">
            <button className="bg-red-500 p-3 rounded-lg w-48 mt-3"
             onClick={async () => {
                const accepted = window.confirm("are you sure?")
                if (accepted) {
                    await deleteTask(params.id);
                    toast.success("tarea eliminada", {
                        position: "bottom-right",
                        style: { background: "#101010", clor: "#fff" }
                    })
                    navigate("/tasks");
                }
            }}> Delete  </button></div>}
        </div>
    )
}