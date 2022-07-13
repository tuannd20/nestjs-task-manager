import { TaskStatus } from '../tasks-status.enum';

export class GetTasksFilterDto {
  status?: TaskStatus;
  search?: string;
}
