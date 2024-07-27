using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PizzaStore.Migrations
{
    /// <inheritdoc />
    public partial class RemoveFKConstraintFromIdOrderInSavedPizzaTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SavedPizza_Orders_Id_Order",
                table: "SavedPizza");

            migrationBuilder.DropIndex(
                name: "IX_SavedPizza_Id_Order",
                table: "SavedPizza");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_SavedPizza_Id_Order",
                table: "SavedPizza",
                column: "Id_Order");

            migrationBuilder.AddForeignKey(
                name: "FK_SavedPizza_Orders_Id_Order",
                table: "SavedPizza",
                column: "Id_Order",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
